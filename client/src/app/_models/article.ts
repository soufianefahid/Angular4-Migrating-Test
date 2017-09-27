export class Article{
    votes: number;
    title: string;
    link: string;

    constructor ( title : string , link : string ,votes : number ){
        this.votes = votes ;
        this.title  = title ;
        this.link = link ;
    }

    public voteUp(): void {
        this.votes += 1;
    }
    public voteDown(): void {
        this.votes -= 1;
    }

}