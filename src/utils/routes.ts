import EnterPage from "../Pages/enterPage/EnterPage";
import {
    PersonalizedHoroscope,
    Gender,
    DateOfBirth,
    DoYouKnowTimeOfBirth,
    SetYourTimeOfBirth,
    DontKnowTimeOfBirth,
    CityOfBirth,
    HaveYouUsedAstrologyBefore,
    HintIsDifferent,
    HintIntro,
    RelationshipStatus,
    PartnerDateOfBirth,
    PartnerTimeOfBirthQuestion,
    PartnerDontKnowTimeOfBirth, PartnerTimeOfBirth, PartnerPlaceOfBirth, Scanner, Email, ChoosePrice, PayWall,
} from "./constants";
import GenderPage from "../Pages/genderPage/GenderPage";
import DateOfBirthPage from "../Pages/DateOfBirth/DateOfBirth";
import DoYouKnowTimeOfBirthPage from "../Pages/DoYouKnowTimeOfBirth/DoYouKnowTimeOfBirth";
import SetYourTimeOfBirthPage from "../Pages/setYourTimeOfBirthPage/SetYourTimeOfBirthPage";
import DontKnowTimeOfBirthPage from "../Pages/dontKnowTimeOfBirth/DontKnowTimeOfBirth";
import DontKnowTimeOfBirthParther from "../Pages/PartnerDontKnowTimeOfBirthPage/DontKnowTimeOfBirth";
import CityOfBirthPage from "../Pages/cityOfBirth/CityOfBirthPage";
import PartnerCityOfBirthPage from "../Pages/partnerCityOfBirth/CityOfBirthPage";
import HaveYouUsedAstrologyBeforePage from "../Pages/haveYouUsedAstrologyBeforePage/HaveYouUsedAstrologyBeforePage";
import HintIsDifferentPage from "../Pages/HintIsDifferentPage/HintIsDifferentPage";
import HintIntroPage from "../Pages/hintIntroPage/HintIntroPage";
import RelationshipStatusPage from "../Pages/RelationshipStatusPage/RelationshipStatusPage";
import PartnerDateOfBirthPage from "../Pages/PartnerDateOfBirthPage/PartnerDateOfBirthPage";
import PartnerTimeOfBirthQuestionPage from "../Pages/PartnerTimeOfBirthQuestionPage/PartnerTimeOfBirthQuestionPage";
import SetPartnerTimeOfBirthPage from "../Pages/setPartnerTimeOfBirthPage/SetPartnerTimeOfBirthPage";
import ScannerPage from "../Pages/Scanner/Scanner";
import EmailPage from "../Pages/Email/Email";
import PaymentPage from "../Pages/Payment/PaymentPage";
import PaywallPage from "../Pages/Paywall/PaywallPage";

export const publicRoutes = [
    // {
    //     path: Login_Route,
    //     Component: LoginPage
    // },
    {
        path: PersonalizedHoroscope,
        Component: EnterPage
    },
    {
        path: Gender,
        Component: GenderPage
    },
    {
        path: DateOfBirth,
        Component: DateOfBirthPage
    },
    {
        path: DoYouKnowTimeOfBirth,
        Component: DoYouKnowTimeOfBirthPage
    },
    {
        path: SetYourTimeOfBirth,
        Component: SetYourTimeOfBirthPage
    },
    {
        path: DontKnowTimeOfBirth,
        Component: DontKnowTimeOfBirthPage
    },
    {
        path: CityOfBirth,
        Component: CityOfBirthPage
    },
    {
        path: HaveYouUsedAstrologyBefore,
        Component: HaveYouUsedAstrologyBeforePage
    },
    {
        path: HintIsDifferent,
        Component: HintIsDifferentPage
    },
    {
        path: HintIntro,
        Component: HintIntroPage
    },
    {
        path: RelationshipStatus,
        Component: RelationshipStatusPage
    },
    {
        path: PartnerDateOfBirth,
        Component: PartnerDateOfBirthPage
    },
    {
        path: PartnerTimeOfBirthQuestion,
        Component: PartnerTimeOfBirthQuestionPage
    },
    {
        path: PartnerDontKnowTimeOfBirth,
        Component: DontKnowTimeOfBirthParther
    },
    {
        path: PartnerTimeOfBirth,
        Component: SetPartnerTimeOfBirthPage
    },
    {
        path: PartnerPlaceOfBirth,
        Component: PartnerCityOfBirthPage
    },
    {
        path: Scanner,
        Component: ScannerPage
    },
    {
        path: Email,
        Component: EmailPage
    },
    {
        path: ChoosePrice,
        Component: PaymentPage
    },
    {
        path: PayWall,
        Component: PaywallPage
    },
];
