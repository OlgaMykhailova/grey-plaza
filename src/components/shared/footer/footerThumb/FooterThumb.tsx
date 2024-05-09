import PrivacyPolicyLink from "./PrivacyPolicyLink";
import Copyright from "./Copyright";

export default function FooterThumb() {
  return (
    <div className="flex flex-col items-center w-full pt-[20px] border-t-[1px] border-solid border-white-text">
      <PrivacyPolicyLink />
      <Copyright />
    </div>
  );
}
