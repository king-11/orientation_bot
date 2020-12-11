/* Add functions for animals command */
import axios from "axios";
import { Extra } from "telegraf";

export const getDog = (ctx) => {
  console.log(ctx.from.first_name, ": /dog")
  let url_photo = ""
  axios.get("https://dog.ceo/api/breeds/image/random").then(function (response) {
    url_photo = response.data.message.toString();
    ctx.replyWithPhoto(url_photo, Extra.caption(`Here's a dog for you!`).markdown())
  // eslint-disable-next-line no-unused-vars
  }).catch(function (response) {
    ctx.reply(`Some error occured while fetching the photograph. You can get a cat photo with /cat! \n:)`);
  });
}

export const getCat = (ctx) => {
  console.log(ctx.from.first_name,": /cat")
  let url_photo = ""
  axios.get("https://api.thecatapi.com/v1/images/search").then(function (response){
      url_photo = response.data[0].url.toString();
      ctx.replyWithPhoto(url_photo, Extra.caption(`Here's a cat for you!`).markdown())
  // eslint-disable-next-line no-unused-vars
  }).catch(function (response){
      ctx.reply(`Some error occured while fetching the photograph. You can get a dog photo with /dog! \n:)`);
  });
}

export const getFox = async (ctx) => {
  console.log(ctx.from.first_name,": /fox")
  try {
    let response = await axios.get('https://randomfox.ca/floof/?ref=apilist.fun')
    if(response.status === 200 ){
      const data = response.data
      ctx.replyWithPhoto(data.image.toString(), Extra.caption(`Here's a fox for you!`).markdown())
    } else {
      await ctx.reply(`Some error occured while fetching the photograph. You can get a fox photo with /fox! \n:)`);
    }
  } catch (e) {
    console.log('Line NO.: ', 41)
    console.log(e.message)
    await ctx.reply(`Some error occured while fetching the photograph. You can get a fox photo with /fox! \n:)`);
  }
}