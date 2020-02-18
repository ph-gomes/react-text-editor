const initialComponet = JSON.parse(localStorage.getItem("content")) || [
  {
    type: "paragraph",
    children: [{ text: "Write your text." }]
  }
];

export default initialComponet;
