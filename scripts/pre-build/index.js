const createCMSConfig = require("./createCMSConfig");

const preBuild = async () => {
  console.log("\u{1F3D7}  Starting pre-build scripts \n");
  const CMSConfig = await createCMSConfig();
  console.log("\u{1F449} CMS Config created \n");
  /*     console.log('...\n\n');
    console.log('\u{1F69C} Now creating additional post data json files... please wait.');
    const additionalPostData = await createAdditionalPOstDataFiles();
    console.log('Additonal post data created with success!'); */
};

module.exports = preBuild();
