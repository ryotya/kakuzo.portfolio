import Navbar from "../components/navbar";
const thankYou = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="py-60">
          <p className="text-base tab:text-xl font-light text-center">
            お問合せありがとうございます！
            <span className="text-base tab:text-xl font-light mt-4 block px-12 sp:px-0">
              内容確認しだいメールかお電話にてご連絡させていただきます😃
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default thankYou;
