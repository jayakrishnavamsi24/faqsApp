import './index.css'

const FaqItem = props => {
  const {faqItem, toggleAnsVisibility} = props
  const {id, questionText, answerText, isAnsVisible} = faqItem

  const onToggleVisibility = () => {
    toggleAnsVisibility(id)
  }

  return (
    <li className="faq-item">
      <div className="question-cont">
        <h1 className="question-text"> {questionText} </h1>
        {!isAnsVisible && (
          <button type="button" onClick={onToggleVisibility}>
            <img
              type="button"
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          </button>
        )}
        {isAnsVisible && (
          <button type="button" onClick={onToggleVisibility}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
            />
          </button>
        )}
      </div>
      <div>
        {isAnsVisible && (
          <>
            <hr />
            <p className="answer-text">{answerText}</p>
          </>
        )}
      </div>
    </li>
  )
}

export default FaqItem
