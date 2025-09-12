import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { updateGlobalState } from "src/Features/globalSlice";
import s from "./PreviewImages.module.scss";
import ProductImages from "./ProductImages";

const PreviewImages = ({ productData }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (productData?.images?.length > 0) {
      setPreviewImg(productData.images[0], dispatch);
    }
  }, [searchParams, productData, dispatch]);

  return (
    <div className={s.images}>
      {productData?.images?.map((img, i) => (
        <ProductImages
          key={i}
          img={img}
          productData={productData}
          index={i}
        />
      ))}
    </div>
  );
};

export default PreviewImages;

export function setPreviewImg(img, dispatch) {
  dispatch(updateGlobalState({ key: "previewImg", value: img }));
}
