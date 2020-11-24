import firebase from "../../../utils/lib/firebase";

export default (req, res) => {
  firebase
    .collection("threads")
    .doc(req.query.name)
    .get()
    .then((doc) => {
      res.json(doc.data());
    })
    .catch((error) => {
      res.json({ error });
    });
};
