import sterlise from '../assets/images/Sterlise.gif';
import empty from '../assets/images/Empty.gif';
import store from '../assets/images/Store.gif';
import insert from '../assets/images/Insert.gif';
import use from '../assets/images/Use.gif';
import fold from '../assets/images/Fold.gif';

const processes = [
    {
        id: 1,
        title: 'Sterilize',
        stepText: true,
        gif: sterlise,
        description: 'Clean and sterilize your cup before each use by boiling it in water for 5 minutes'
    },
    {
        id: 2,
        title: 'Fold',
        stepText: true,
        gif: fold,
        description: 'Fold the rim of the cup using a method that is comfortable for you, such as the punch down fold, the C-fold, or the 7-fold'
    },
    {
        id: 3,
        title: 'Insert',
        stepText: true,
        gif: insert,
        description: 'Insert the folded cup gently into the vagina. Depending on your cervix depth, the stem may remain inside or outside. To ease insertion, elevate one leg or squat with your legs apart'
    },
    {
        id: 4,
        title: 'Use',
        stepText: true,
        gif: use,
        description: 'Flowra offers leak-free comfort for up to 12 hours, whether you’re sleeping, swimming, or going about your day.'
    },
    {
        id: 5,
        title: 'Empty',
        stepText: true,
        gif: empty,
        description: 'Empty the menstrual cup into the toilet and rinse thoroughly. Clean the rim holes to prevent clogging. Depending on flow, empty the cup 2-5 times daily.' 
    },
    {
        id: 6,
        title: 'Store Safely',
        stepText: true,
        gif: store,
        description: 'At the end of your cycle, sterilize the cup by boiling it for 5 minutes. Once clean and dry, store your Flowra cup in the provided breathable pouch to keep it in perfect condition for your next cycle'
    },
]

export default processes;