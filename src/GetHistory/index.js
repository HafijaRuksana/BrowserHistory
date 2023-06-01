import './index.css'

const GetHistory = props => {
  const {itemDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onClickDeleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-list-item">
      <div className="history-details">
        <p className="time-item">{timeAccessed}</p>
        <div className="icon-domain">
          <img src={logoUrl} alt="domain logo" className="website-logo" />
          <div className="domain-title">
            <p className="title-item">{title} </p>
            <p className="domain-item">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={onClickDeleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default GetHistory
