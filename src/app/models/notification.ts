export class Notification{
    _id:String;
    user:String;
    username:String;
    img:String;
    reclamation:String;
    code:Number;
    createdAt:Date;
    etape:String;
    updatedAt:Date;
    constructor(_id:String,user:String,username:String,img:String,reclamation:String,code:Number,createdAt:Date,etape:String,updatedAt:Date){
        this._id=_id;
        this.user=user;
        this.username=username;
        this.img=img;
        this.reclamation=reclamation;
        this.code=code;
        this.createdAt=createdAt;
        this.etape=etape;
        this.updatedAt=updatedAt;
    }
}