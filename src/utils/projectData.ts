import ecom from "../../public/ecommerce.jpeg";
import yt from "../../public/yt.jpeg";
import google from "../../public/google.jpeg";

export const projectData: any = [
    {
        id: 1,
        url: ecom,
        heading: "A simple eCommerce WebApp",
        desc: "In this project, users can add products into cart, search products according to the category",
        techStack: "React JS, Tailwind CSS, OAuth",
        gitRepo: "https://github.com/ImBiswarup/eCommerce",
        hostedUrl: "https://real-ekart.netlify.app/"
    },
    {
        id: 2,
        url: yt,
        heading: "A simple Youtube clone",
        desc: "In this project users can search the videos as like the real one",
        techStack: "React JS, Tailwind CSS, Rapid API",
        gitRepo: "https://github.com/ImBiswarup/Youtube_Clone",
        hostedUrl: "https://realfreetube.netlify.app/"
    },
    {
        id: 3,
        url: google,
        heading: "A simple google clone",
        desc: "In this project users can search all the items as like the real Google",
        techStack: "React JS, Tailwind CSS",
        gitRepo: "https://github.com/ImBiswarup/Google_clone",
        hostedUrl: "https://fake-google-search.netlify.app/"
    },
];
