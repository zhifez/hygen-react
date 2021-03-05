// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'title',
    message: `What's the page title?`
  },
  {
    type: 'input',
    name: 'description',
    message: `What's the page description?`
  }
];