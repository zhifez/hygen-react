// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
const pageTypes = [
  'normal',
  'card-display',
  'formik'
];

const prompt_card_display = async ( prompter, inputs ) => {
  const userInputs = await prompter.prompt ( [
    {
      type: 'input',
      name: 'cardColumnWeb',
      default: 4,
      message: 'Amount of columns to display Card in (Web):'
    },
    {
      type: 'input',
      name: 'cardColumnMobile',
      default: 2,
      message: 'Amount of columns to display Card in (Mobile):'
    }
  ] );

  const final = Object.assign ( inputs, userInputs );
  final.hasCard = true;
  
  final.cardColumnWeb = parseInt ( final.cardColumnWeb ) ?? 4; // Reset to 4 if got NULL
  final.cardColumnWeb = 12 / final.cardColumnWeb;

  final.cardColumnMobile = parseInt ( final.cardColumnMobile ) ?? 2; // Reset to 2 if got NULL
  final.cardColumnMobile = 12 / final.cardColumnMobile;

  return final;
}

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
        default: 0,
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
    final.hasCard = false;

    const pageType = parseInt ( final[ 'pageType' ] ) ?? 0;
    switch ( pageType ) {
    case 1:
      return prompt_card_display ( prompter, final );

    default:
      return final;
    }
  }
}