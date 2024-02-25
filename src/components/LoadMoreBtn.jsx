import styles from './LoadMoreBtn.module.css'; 

const LoadMoreBtn = ({onClick}) => {
  return (
    <button className={styles.loadMoreBtn} onClick={onClick} >
      load more
    </button>
  )
}

export default LoadMoreBtn
