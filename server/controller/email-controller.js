import EmailModel from "../model/email.js";

export const saveSentEmails = (req, res) => {
  try {
    const email = new EmailModel(req.body);
    email.save();

    res.status(200).json("emailed saved successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getEmails = async (req, res) => {
  try {
    let emails;
    if (req.params.type === "bin") {
      emails = await EmailModel.find({ bin: true });
    }else if(req.params.type === "allmail"){
      emails = await EmailModel.find({})
    } else {
      emails = await EmailModel.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const moveEmailsToBin = async (req, res) => {
  try {
    await EmailModel.updateMany(
      { _id: { $in: req.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return res.status(200).json("emails moved to bin successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
