import React from "react"
import PropTypes from "prop-types"

export default class SchemesContainer extends React.Component {

  static propTypes = {
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
  }

  render () {
    const {specActions, specSelectors, getComponent} = this.props
    const currentScheme = specSelectors.operationScheme()
    const schemes = specSelectors.schemes()
    const securityDefinitions = specSelectors.securityDefinitions()

    const Col = getComponent("Col")
    const AuthorizeBtn = getComponent("authorizeBtn", true)
    const Schemes = getComponent("schemes")

    return (
      <div className="row justify-content-center">
        {schemes && schemes.size || securityDefinitions ? (
          <div className="scheme-container col-lg-10">
            <Col className="schemes wrapper">
              {schemes && schemes.size ? (
                <Schemes
                  currentScheme={currentScheme}
                  schemes={schemes}
                  specActions={specActions}
                />
              ) : null}
              {securityDefinitions ? (
                <AuthorizeBtn/>
              ) : null}
            </Col>
          </div>
        ) : null}
      </div>
    )
  }
}
