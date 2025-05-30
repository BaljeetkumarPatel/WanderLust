const Listing=require("./models/listing");
const Review=require("./models/review");
const {listingSchema,reviewSchema}=require("./schema.js"); 
const ExpressError=require("./utils/ExpressError.js");

module.exports.isLoggedIn=(req,res,next)=>{
    //console.log(req.path,"..",req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You are not owner of this listing");
       return res.redirect(`/listings/${id}`);
    }
    next();
};


//server side validation for listing-middleware
module.exports.validateListing=(req,res,next)=>{
    //console.log(req.body);
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
};


//server side validation for review-middleware
module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let ereMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,result.errMsg);
    }
    else{
        next();
    }
};

module.exports.isReviewAuthor=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    let review= await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You have no permission to delete this review sorry!");
       return res.redirect(`/listings/${id}`);
    }
    next();
};