import Form from "@/components/Article/Form.vue";
import ImageBlock from "@/components/Article/ImageBlock.vue";
import IntroBlock from "@/components/Article/IntroBlock.vue";
import ListBlock from "@/components/Article/ListBlock.vue";
import SliderBlock from "@/components/Article/SliderBlock.vue";
import TextBlock from "@/components/Article/TextBlock.vue";
import TheSubscribeForm from "@/components/TheSubscribeForm.vue";

export default function (type) {
  switch (type) {
    case "article_intro_block":
      return IntroBlock;
    case "text_block":
      return TextBlock;
    case "image_block":
      return ImageBlock;
    case "slider_block":
      return SliderBlock;
    case "subscribe_form_block":
      return TheSubscribeForm;
    case "cta_form_block":
      return Form;
    case "article_list_block":
      return ListBlock;
    default:
      "";
  }
}
