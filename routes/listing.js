const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const flash=require("connect-flash");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js")
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});



router
    .route("/")
    //index route-listing
    .get(wrapAsync(listingController.index))
    //create route:- using wrapasync(error handling)
    .post(
       isLoggedIn, 
       upload.single("listing[image]"),
       validateListing,
       wrapAsync(listingController.createListing)
    );

//create new route for create a listing
router.get("/new",
    isLoggedIn,
    listingController.renderNewForm
);

//for update and delete route
router
    .route("/:id")
    //show route
    .get(wrapAsync(listingController.showListing))
    //update route
    .put(
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    //delete route
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing)
    );

//Edit route
router.get("/:id/edit", 
    isLoggedIn,
    isOwner,
    wrapAsync(
        listingController.renderEditForm
    )
);


module.exports=router;