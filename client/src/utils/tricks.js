import TabletMac from "@material-ui/icons/TabletMac";
import Save from "@material-ui/icons/Save";
import HdrWeak from "@material-ui/icons/HdrWeak";
import DynamicFeed from "@material-ui/icons/DynamicFeed";

export const TRICKS_ROUTES = [
    {
        title: "Наши домики",
        shortTitle: "Наши домики",
        description:
            "Тут вибираєш собі хату",
        url: "/search-home",
        Icon: TabletMac,
        image: null,
        enYouTube: null,
        ruYouTube: null,
        github: null
    },
    {
        title: "Redirect After Login",
        shortTitle: "Redirect After Login",
        description:
            "restore-route & firstly user login, and only then redirect them exactly to the page that they originally wanted ",
        url: "/restore-route",
        Icon: Save,
        image: null,
        enYouTube: null,
        ruYouTube: null,
        github: null
    },
    {
        title: "Почати навчання",
        shortTitle: "Intro MARKSEM",
        description:
            "Вчимося використовувати MARKSEM",
        url: "/stepper",
        Icon: HdrWeak,
        image: null,
        enYouTube: null,
        ruYouTube: null,
        github: null
    },
    {
        title: "Дивитися будинки",
        shortTitle: "Response-router 2 pop-ups",
        description: "Картки товарів",
        url: "/two-popups",
        Icon: DynamicFeed,
        image: null,
        enYouTube: null,
        ruYouTube: null,
        github: null,
    },
];
