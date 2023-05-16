import swal from "sweetalert";

type swl = {
  title: string;
  text: string;
  icon: string;
};

export const Alert = ({ title, text, icon }: swl) => {
  return swal({
    title,
    text,
    icon,
    button: "OK",
  });
};
