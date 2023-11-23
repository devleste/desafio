import style from "./index.module.css";

type IProps = {
  totalPosts: number,
  postsPerPage: number,
  setCurrentPage: (page: number) => void,
  currentPage: number
}

export default function Paginate(props:IProps){

  const pages = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
      pages.push(i);
  }

  return (
    <section className={style.paginateContainer}>
      <div className={style.paginate}>
        {
          pages.map((page, index) => (
            <button
              key={index}
              onClick={() => props.setCurrentPage(page)}
            >
              {page}
            </button>
          ))
        }
      </div>
    </section>
  )
}
