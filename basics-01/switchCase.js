var user = "abc"

switch (user) {
    case "admin":
        console.log("you get full acces");
        break;
        case "subadmin":
        console.log("you get acces to create/delete courses");
        break;
        case "testprep":
        console.log("you get acces to create/delete tests");
        break;
        case "user":
        console.log("you get acces to consume content");
        break;

    default:
        console.log("trial user, you have no access");
        break;
}