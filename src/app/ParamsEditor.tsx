import './App.css'
import React from 'react'

interface Param {
  id: number
  name: string
}

interface ParamValue {
  paramId: number
  value: string
}

interface Model {
  paramValues: ParamValue[]
}

interface Props {
  params: Param[]
  model: Model
}

interface State {
  showModel: boolean
  model: ParamValue[]
}

class ParamsEditor extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      showModel: false,
      model: props.model.paramValues
    }
  }

  getValue = (id: number): string => {
    const currentModel = this.state.model.find((item: ParamValue) => item.paramId === id)
    return currentModel ? currentModel.value : ''
  }

  public getModel = (): ParamValue[] => {
    this.setState({ showModel: !this.state.showModel })
    return this.state.model
  }

  setValue = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
    const newModel = this.state.model.map((item) => item.paramId === id ? { ...item, value: e.target.value } : item)
    this.setState({ model: newModel })
  }

  renderShowModel = (): JSX.Element => {
    return (
      <section>
        <p>It is new model values:</p>
        <ul>
          {this.state.model.map((item) => {
            return (
          <li key={item.value}>
            <span>{item.paramId}</span>  <span>{item.value}</span>
          </li>
            )
          })}
        </ul>
      </section>
    )
  }

  render (): JSX.Element {
    return (
      <main>
        <h1>It is ParamsEditor</h1>

        <ul>
          {this.props.params.map((param) => {
            return (
              <li key={param.name}>
                <span>{param.name}</span> <input type="text" defaultValue={this.getValue(param.id)} onChange={(e) => { this.setValue(e, param.id) }} />
              </li>
            )
          })}

        </ul>

        <button onClick={this.getModel}>{this.state.showModel ? 'Hide New Model' : 'Show New Model'}</button>
        {this.state.showModel && this.renderShowModel() }

      </main>
    )
  }
}

export default ParamsEditor
