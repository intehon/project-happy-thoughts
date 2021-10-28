import React from "react"

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
    return (
        <form 
            className="form-wrapper"
            onSubmit={onFormSubmit}>
          <label 
          className="thought-text" 
          htmlFor="newThought">What's making you happy right now?</label>
          <input
          className="thought-input" 
          id="newThought" 
          type="text" 
          value={newThought} 
          onChange={(e) => setNewThought(e.target.value)} 
          />
          {/* <p className={newThought.length <= 140 ? "count-text" : "count-text count-text-error"}>{newThought.length} of 140</p> */}
          {/* <p>{newThought.length} of 140</p> */}
          <button 
          className="form-btn"
          type="submit">
              <span className="heart-icon" role="img" aria-label="like">❤️ </span>
              Send Happy Thought
              <span className="heart-icon" role="img" aria-label="like"> ❤️</span>
              </button>
        </form>
    )

}

export default ThoughtForm