// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
const pageTypes = [
  'normal',
  'card-display',
  'formik'
];

module.exports = {
  prompt: async ( { prompter, args } ) => {
    let pageTypeMessage = 'Type of page (by index):';
    pageTypes.forEach ( ( type, index ) => {
      pageTypeMessage += `\n${index} - ${type}`;
    } );
    const userInputs = await prompter.prompt ( [
      {
        type: 'input',
        name: 'pageType',
        default: '0',
        message: pageTypeMessage
      },
      {
        type: 'input',
        name: 'title',
        default: args.name,
        message: `Page title:`
      },
      {
        type: 'input',
        name: 'desc',
        default: 'Lorem ipsum dolor sine',
        message: `Page description:`
      },
      {
        type: 'input',
        name: 'route',
        initial: `/${args.name.toLowerCase ()}`,
        message: `Page route:`
      }
    ] );

    if ( userInputs.route[0] !== '/' ) {
      userInputs.route = `/${userInputs.route}`;
    }

    const final = Object.assign ( args, userInputs );
    final.hasCard = final[ 'pageType' ] === '1';
    return final;
  }
}