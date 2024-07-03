import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import styles from "./Pagination.module.css";

const Pagination = ({ data, pageIndex, setPageIndex }) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.showing}>
        Exibindo
        <b> {pageIndex + 1}-{data?.length} </b> de
        <b> {data.flat(Infinity).length} </b> entradas
      </div>
      <div className={styles.page}>
        <div className={styles.arrow}>
          <button
            type="button"
            onClick={() => {
              pageIndex > 0 && setPageIndex(prev => prev - 1);
            }}
          >
            <IoChevronBackOutline className={styles.icon}
            />
          </button>
        </div>
        <div className={styles.page_number}>
          {data.map((_, index) => {
            return (
              <button
                key={index}
                className={pageIndex === index ? styles.selected : ""}
                type="button"
                onClick={() => setPageIndex(index)}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
        <div className={styles.arrow}>
          <button
            type="button"
            onClick={() => {
              pageIndex < data?.length - 1 && setPageIndex(prev => prev + 1);
            }}
          >
            <IoChevronForwardOutline className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;