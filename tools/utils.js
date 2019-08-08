
//  Retourne le nom de l'onglet du parent
export const getDrawerItemsList = items => {
    const drawerItems = {};

    Object.keys(items).map(item => {

        let key = items[item].state.key

        key = key.substr(0, key.indexOf('_'));

        if (key.length) {
            if (!(drawerItems.hasOwnProperty(key))) {
                drawerItems[key] = Array(item)
            }
            else {
                drawerItems[key].push(item)
            }
        }
    })


    return drawerItems;
};


//  Retourne le nom de l'onglet de l'enfant sans celui du parent
export const evaluateChildDrawerTitle = (drawerTitle) => (
    drawerTitle.substr(drawerTitle.indexOf('_') + 1)
);



export const arrayToObject = (array) => {
    var result = {}
    array.forEach((value, index) => {
        result[value] = index
    });

    return result
}

export const getIconName = (item) => {
    var itemList = [
        "Education fiscale",
        "Informations fiscales",
        "Conseils fiscaux",
        "Calendrier des obligations"
    ]

    var iconList = [
        "pencil",
        "newspaper-o",
        "leanpub",
        "calendar",
    ]

    return iconList[itemList.indexOf(item)]
};
