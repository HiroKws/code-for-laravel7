let mix = require("laravel-mix");

mix.browserSync({
   ignore: [
      "resouces/views/mail/**/*.php",
      "resouces/views/mails/**/*.php"
   ],
   files: [
      "resources/views/**/*.php",
      "public/**/*.*"
   ],
   proxy: {
      target: "http://homestead.test/"
   }
});
