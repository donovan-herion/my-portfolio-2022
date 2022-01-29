import Link from "next/link";

function ToggleLanguage({ english, setEnglish }) {
  return (
    <Link href={english ? "/" : "/en/"}>
      <div class="on-off-toggle">
        <input class="on-off-toggle__input" type="checkbox" checked={english ? "checked" : ""} id="bopis" onClick={() => setEnglish(!english)} />
        <label for="bopis" class="on-off-toggle__slider"></label>
      </div>
    </Link>
  );
}

export default ToggleLanguage;
