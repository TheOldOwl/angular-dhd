export class Article {
    public id: string;
    public image: string;
    public title: string;
    public synops: string;
    //public smallLogo: string;
    public author: string;
    public date: string;
    public body: string;

    constructor (id: string, image: string, title: string, synops: string, author: string, publicationDate: string, body: string) {

        this.id = id;
        this.image = image;
        this.title = title;
        this.synops = synops;
        //this.smallLogo = smallLogo;
        this.author = author;
        this.date = publicationDate;
        this.body = body;
    }

}