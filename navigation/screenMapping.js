
import Home from '../screens/Home';
import Settings from '../screens/Settings';


import Formations from './Education/Formations';
import Education from './Education/Education';
import Apprentissage from './Education/Apprentissage';

import DGI from './Informations/DGI';
import DGD from './Informations/DGD';
import Tresor from './Informations/Tresor';

import Assistance from './Conseil/Assistance';
import Audit from './Conseil/Audit';

import Centre from './Calendrier/Centre';
import Regime from './Calendrier/Regime';
import Activites from './Calendrier/Activites';
import Impot from './Calendrier/Impot';






export default {

    Accueil: {
        screen: Home
    },

    "Education fiscale_Formations": {
        screen: Formations,
    },
    "Education fiscale_Education au civisme fiscal": {
        screen: Education,
    },
    "Education fiscale_Apprentissage": {
        screen: Apprentissage,
    },


    "Informations fiscales_Direction Générale des Impôts": {
        screen : DGI,
    },
    "Informations fiscales_Direction Générale des Douanes": {
        screen: DGD,
    },
    "Informations fiscales_Direction Générale du Trésor": {
        screen: Tresor,
    },


    "Conseils fiscaux_Assistance juridique et fiscale": {
        screen: Assistance,
    },
    "Conseils fiscaux_Audit et Consulting": {
        screen: Audit,
    },


    "Calendrier des obligations_Centre d'imposition": {
        screen: Centre,
    },
    "Calendrier des obligations_Regime d'imposition": {
        screen: Regime,
    },
    "Calendrier des obligations_Nature des activités": {
        screen: Activites,
    },
    "Calendrier des obligations_Nature des impots à acquitter": {
        screen: Impot,
    },



    Paramètres: {
        screen: Settings
    }
    
}