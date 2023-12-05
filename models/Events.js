class Events {

    constructor(id,name,description,type,nb_places_dispo,nb_places_total,date_debut,artist,prix){
        this.id= id;
        this.name = name;
        this.description =description;
        this.type = type;
        this.nb_places_dispo= nb_places_dispo;
        this.nb_places_total = nb_places_total;
        this.date_debut = date_debut;
        this.artist = artist;
        this.prix = prix;

    }


}

module.exports = Events;