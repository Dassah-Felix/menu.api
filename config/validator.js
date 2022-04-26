const yup = require ("yup");


function validate(_data) {
const userSchema = yup.object().shape({
username: yup.string().required("this can't be null").min(3).max(20),
email: yup.string().email().required("this can't be null").min(3).max(50),
password: yup.string().required("please password required").min(8).max(20),

});
return userSchema.validate(_data);
}

module.exports=validate;