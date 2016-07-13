import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'

import {
   Alert,
   Accordion,
   Button,
   Badge,
   Breadcrumb,
   ButtonToolbar,
   ButtonGroup,
   Carousel,
   Collapse,
   ControlLabel,
   Checkbox,
   Col,
   Clearfix,
   Dropdown,
   DropdownButton,
   Fade,
   Form,
   FormGroup,
   FormControl,
   Glyphicon,
   Grid,
   HelpBlock,
   InputGroup,
   Image,
   Jumbotron,
   ListGroup,
   ListGroupItem,
   Label,
   MenuItem,
   Media,
   Modal,
   Nav,
   NavItem,
   Navbar,
   NavDropdown,
   Overlay,
   OverlayTrigger,
   PageHeader,
   Pager,
   PageItem,
   Pagination,
   PanelGroup,
   Panel,
   Popover,
   ProgressBar,
   Radio,
   Row,
   ResponsiveEmbed,
   SplitButton,
   Tabs,
   Tab,
   Table,
   Thumbnail,
   Tooltip,
   Well
} from 'react-bootstrap'
const bootstrapUtils = require('react-bootstrap/lib/utils/bootstrapUtils')

const alertInstance = (
  <Alert bsStyle="warning">
    <strong>Holy guacamole!</strong> Best check yo self, you are not looking too good.
  </Alert>
);

const AlertDismissable = React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
          <p>
            <Button bsStyle="danger">Take this action</Button>
            <span> or </span>
            <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
          </p>
        </Alert>
      );
    }

    return (
      <Button onClick={this.handleAlertShow}>Show Alert</Button>
    );
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});

const badgeInstance = (
  <p>Badges <Badge>42</Badge></p>
);

const breadcrumbInstance = (
  <Breadcrumb>
    <Breadcrumb.Item href="#">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      Data
    </Breadcrumb.Item>
  </Breadcrumb>
);

const buttonsInstance = (
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    <Button bsSize="large" active>Button</Button>
  </ButtonToolbar>
);

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const buttonsInstance2 = (
  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
    <Button bsSize="large" block>Block level button</Button>
  </div>
);

const buttonsInstance3 = (
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
    <Button bsSize="large" disabled>Button</Button>
  </ButtonToolbar>
);

const buttonGroupInstance = (
  <ButtonGroup>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
);

const buttonGroupInstance2 = (
  <ButtonGroup vertical block>
    <Button>Full width button</Button>
    <Button>Full width button</Button>
  </ButtonGroup>
);

const buttonGroupInstance3 = (
  <ButtonGroup justified>
    <Button href="#">Left</Button>
    <Button href="#">Middle</Button>
    <DropdownButton title="Dropdown" id="bg-justified-dropdown">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);

const buttonGroupInstance4 = (
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <DropdownButton title="Dropdown" id="bg-nested-dropdown">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);

const buttonGroupInstance5 = (
  <div>
    <ButtonToolbar>
      <ButtonGroup bsSize="large">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>

    <ButtonToolbar>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>

    <ButtonToolbar>
      <ButtonGroup bsSize="small">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>

    <ButtonToolbar>
      <ButtonGroup bsSize="xsmall">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </div>
);

const buttonGroupInstance6 = (
  <ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <Button>Button</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);

const LoadingButton = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    };
  },

  render() {
    let isLoading = this.state.isLoading;
    return (
      <Button
        bsStyle="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}>
        {isLoading ? 'Loading...' : 'Loading state'}
      </Button>
    );
  },

  handleClick() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }
});

const buttonsInstance4 = (
  <div>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="large">Large button</Button>
      <Button bsSize="large">Large button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary">Default button</Button>
      <Button>Default button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="small">Small button</Button>
      <Button bsSize="small">Small button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
      <Button bsSize="xsmall">Extra small button</Button>
    </ButtonToolbar>
  </div>
);

const buttonsInstance5 = (
    <ButtonToolbar>
      <Button href="#">Link</Button>
      <Button>Button</Button>
    </ButtonToolbar>
  );

  const buttonGroupInstance7 = (
    <ButtonToolbar>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );

  const buttonsInstance6 = (
    <ButtonToolbar>
      {/* Standard button */}
      <Button>Default</Button>

      {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
      <Button bsStyle="primary">Primary</Button>

      {/* Indicates a successful or positive action */}
      <Button bsStyle="success">Success</Button>

      {/* Contextual button for informational alert messages */}
      <Button bsStyle="info">Info</Button>

      {/* Indicates caution should be taken with this action */}
      <Button bsStyle="warning">Warning</Button>

      {/* Indicates a dangerous or potentially negative action */}
      <Button bsStyle="danger">Danger</Button>

      {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
      <Button bsStyle="link">Link</Button>
    </ButtonToolbar>
  );

  const ControlledCarousel = React.createClass({
    getInitialState() {
      return {
        index: 0,
        direction: null
      };
    },

    handleSelect(selectedIndex, e) {
      alert('selected=' + selectedIndex + ', direction=' + e.direction);
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    },

    render() {
      return (
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/static/img/carousel.png"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/static/img/carousel.png"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/static/img/carousel.png"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  });

  const carouselInstance = (
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/static/img/carousel.png"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/static/img/carousel.png"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/static/img/carousel.png"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

  /*
   * IE8下需要 react-bootstrap/lib/Collapse.js line125
   *   在改行包围try{}catch(e){}，防止IE8下报js错误
   *   可能是IE8不支持Transition.End导致
   */
  class Example extends React.Component {
    constructor(...args) {
      super(...args);

      this.state = {};
    }

    render() {
      return (
        <div>
          <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
            click
          </Button>
          <Collapse in={this.state.open}>
            <div>
              <Well>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </Well>
            </div>
          </Collapse>
        </div>
      );
    }
  }

  bootstrapUtils.addStyle(Button, 'custom');

  const customButtonStyle = (
    <div>
      <style type="text/css">{`
      .btn-custom {
          background-color: purple;
          color: white;
      }
      `}</style>
      <Button bsStyle="custom">Custom</Button>
    </div>
  );

  const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

  function renderDropdownButton(title, i) {
    return (
      <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>Active Item</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    );
  }

  const buttonsInstance7 = (
    <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
  );


  const dropdownInstance = (
    <ButtonToolbar>
      <Dropdown id="dropdown-custom-1">
        <Dropdown.Toggle>
          <Glyphicon glyph="star" />
          Pow! Zoom!
        </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id="dropdown-custom-2">
        <Button bsStyle="info">
          mix it up style-wise
        </Button>
        <Dropdown.Toggle bsStyle="success"/>
        <Dropdown.Menu className="super-colors">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </Dropdown.Menu>
      </Dropdown>

    </ButtonToolbar>
  );

  class CustomMenu extends React.Component {

    constructor(...args) {
      super(...args);
      this.state = { value: '' };
      this.onChange = e => this.setState({ value: e.target.value });
    }

    render() {
      let { className, ...props } = this.props;

      return (
        <div
          className={"dropdown-menu"}
          style={{ padding: ''}}
        >
          <input
            ref={input => this.input = input}
            type="text"
            className="form-control"
            placeholder="type to filter..."
            onChange={this.onChange}
            value={this.state.value}
          />
          <ul className="list-unstyled">
            { this.filterChildren() }
          </ul>
        </div>
      );
    }

    filterChildren() {
      let { children } = this.props;
      let { value } = this.state;
      let filtered = [];

      let matches = child => child.props.children.indexOf(value) !== -1;

      React.Children.forEach(children, child => {
        if (!value.trim() || matches(child)) {
          filtered.push(child);
        }
      });

      return filtered;
    }

    focusNext() {
      let input = ReactDOM.findDOMNode(this.input);

      if (input) {
        input.focus();
      }
    }
  }

  let preventDefault = e => e.preventDefault();

  let dropdownExample = (
      <Dropdown id="dropdown-custom-menu">
        <a href="#" bsRole="toggle" onClick={preventDefault}>
          custom Toggle
        </a>

        <CustomMenu bsRole="menu">
          <MenuItem eventKey="1">Red</MenuItem>
          <MenuItem eventKey="2">Blue</MenuItem>
          <MenuItem eventKey="3" active>Orange</MenuItem>
          <MenuItem eventKey="1">Red-Orange</MenuItem>
        </CustomMenu>
      </Dropdown>
    );

    const buttonInstance = (
      <ButtonToolbar>
        <DropdownButton bsStyle="default" title="No caret" noCaret id="dropdown-no-caret">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    );

    const buttonsInstance8 = (
      <div>
        <ButtonToolbar>
          <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton title="Default button" id="dropdown-size-medium">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton bsSize="small" title="Small button" id="dropdown-size-small">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton bsSize="xsmall" title="Extra small button" id="dropdown-size-extra-small">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
    /*
     * IE8 不支持 Fade 效果!(但不会报js错)
     */
    class Example2 extends React.Component {

      constructor(...args) {
        super(...args);
        this.state = {};
      }

      render() {
        return (
          <div>
            <Button onClick={()=> this.setState({ open: !this.state.open })}>
              click
            </Button>
            <Fade in={this.state.open}>
              <div>
                <Well>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Well>
              </div>
            </Fade>
          </div>
        );
      }
    }
    const FormExample = React.createClass({
      getInitialState() {
        return {
          value: ''
        };
      },

      getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
      },

      handleChange(e) {
        this.setState({ value: e.target.value });
      },

      render() {
        return (
          <form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form>
        );
      }
    });

    const formInstance = (
      <form>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Text</ControlLabel>
          <FormControl type="text" placeholder="Enter text" />
        </FormGroup>
        <FormGroup controlId="formControlsEmail">
          <ControlLabel>Email address</ControlLabel>
          <FormControl type="email" placeholder="Enter email" />
        </FormGroup>
        <FormGroup controlId="formControlsPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" />
        </FormGroup>
        <FormGroup controlId="formControlsFile">
          <ControlLabel>File</ControlLabel>
          <FormControl type="file" />
          <HelpBlock>Example block-level help text here.</HelpBlock>
        </FormGroup>

        <Checkbox checked readOnly>
          Checkbox
        </Checkbox>
        <Radio checked readOnly>
          Radio
        </Radio>

        <FormGroup>
          <Checkbox inline>
            1
          </Checkbox>
          {' '}
          <Checkbox inline>
            2
          </Checkbox>
          {' '}
          <Checkbox inline>
            3
          </Checkbox>
        </FormGroup>
        <FormGroup>
          <Radio inline>
            1
          </Radio>
          {' '}
          <Radio inline>
            2
          </Radio>
          {' '}
          <Radio inline>
            3
          </Radio>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>Multiple select</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">select (multiple)</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Static text</ControlLabel>
          <FormControl.Static>
            email@example.com
          </FormControl.Static>
        </FormGroup>

        <Button type="submit">
          Submit
        </Button>
      </form>
    );

    const formInstance2 = (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );

    /*
     *  IE8下 出现 label和input跨行问题，在formgroup-div增加 width 可修复；
     */
    const formInstance3 = (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Name</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="Jane Doe" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Email</ControlLabel>
          {' '}
          <FormControl type="email" placeholder="jane.doe@example.com" />
        </FormGroup>
        {' '}
        <Button type="submit">
          Send invitation
        </Button>
      </Form>
    );

    const formInstance4 = (
      <form>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
            <FormControl type="text" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormControl type="text" />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <InputGroup>
            <FormControl type="text" />
            <InputGroup.Addon>
              <Glyphicon glyph="music" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button>Before</Button>
            </InputGroup.Button>
            <FormControl type="text" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" />
            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title="Action"
            >
              <MenuItem key="1">Item</MenuItem>
            </DropdownButton>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <input type="radio" aria-label="..." />
            </InputGroup.Addon>
            <FormControl type="text" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <input type="checkbox" aria-label="..." />
            </InputGroup.Addon>
            <FormControl type="text" />
          </InputGroup>
        </FormGroup>
      </form>
    );
    const formInstance5 = (
      <form>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Large text" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Normal text" />
        </FormGroup>
        <FormGroup bsSize="small">
          <FormControl type="text" placeholder="Small text" />
        </FormGroup>
      </form>
    );

    /*
     * IE8在 input很窄时，会出现图标偏离input现象，足够宽时没问题，tobe fix
     */
    const formInstance6 = (
      <form>
        <FormGroup controlId="formValidationSuccess1" validationState="success">
          <ControlLabel>Input with success</ControlLabel>
          <FormControl type="text" />
          <HelpBlock>Help text with validation state.</HelpBlock>
        </FormGroup>

        <FormGroup controlId="formValidationWarning1" validationState="warning">
          <ControlLabel>Input with warning</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationError1" validationState="error">
          <ControlLabel>Input with error</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSuccess2" validationState="success">
          <ControlLabel>Input with success and feedback icon</ControlLabel>
          <FormControl type="text" />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formValidationWarning2" validationState="warning">
          <ControlLabel>Input with warning and feedback icon</ControlLabel>
          <FormControl type="text" />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formValidationError2" validationState="error">
          <ControlLabel>Input with error and feedback icon</ControlLabel>
          <FormControl type="text" />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formValidationSuccess3" validationState="success">
          <ControlLabel>Input with success and custom feedback icon</ControlLabel>
          <FormControl type="text" />
          <FormControl.Feedback>
            <Glyphicon glyph="music" />
          </FormControl.Feedback>
        </FormGroup>

        <FormGroup controlId="formValidationWarning3" validationState="warning">
          <ControlLabel>Input group with warning</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
            <FormControl type="text" />
          </InputGroup>
          <FormControl.Feedback />
        </FormGroup>

        <Form componentClass="fieldset" horizontal>
          <FormGroup controlId="formValidationError3" validationState="error">
            <Col componentClass={ControlLabel} xs={3}>
              Input with error
            </Col>
            <Col xs={9}>
              <FormControl type="text" />
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="formValidationSuccess4" validationState="success">
            <Col componentClass={ControlLabel} xs={3}>
              Input group with success
            </Col>
            <Col xs={9}>
              <InputGroup>
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
              <FormControl.Feedback />
            </Col>
          </FormGroup>
        </Form>

        <Form componentClass="fieldset" inline>
          <FormGroup controlId="formValidationWarning4" validationState="warning">
            <ControlLabel>Input with warning</ControlLabel>
            {' '}
            <FormControl type="text" />
            <FormControl.Feedback />
          </FormGroup>
          {' '}
          <FormGroup controlId="formValidationError4" validationState="error">
            <ControlLabel>Input group with error</ControlLabel>
            {' '}
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
            <FormControl.Feedback />
          </FormGroup>
        </Form>

        <Checkbox validationState="success">
          Checkbox with success
        </Checkbox>
        <Radio validationState="warning">
          Radio with warning
        </Radio>
        <Checkbox validationState="error">
          Checkbox with error
        </Checkbox>

        {/* This requires React 15's <span>-less spaces to be exactly correct. */}
        <FormGroup validationState="success">
          <Checkbox inline>
            Checkbox
          </Checkbox>
          {' '}
          <Checkbox inline>
            with
          </Checkbox>
          {' '}
          <Checkbox inline>
            success
          </Checkbox>
        </FormGroup>
      </form>
    );
    const glyphInstance = (
      <div>
        <ButtonToolbar>
          <ButtonGroup>
            <Button><Glyphicon glyph="align-left" /></Button>
            <Button><Glyphicon glyph="align-center" /></Button>
            <Button><Glyphicon glyph="align-right" /></Button>
            <Button><Glyphicon glyph="align-justify" /></Button>
          </ButtonGroup>
        </ButtonToolbar>
        <ButtonToolbar>
          <ButtonGroup>
            <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
            <Button><Glyphicon glyph="star" /> Star</Button>
            <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
            <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
    const gridInstance = (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
        </Row>

        <Row className="show-grid">
          <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
          <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        </Row>
      </Grid>
    );
    const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

    const gridInstance2 = (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>
          <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
          <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
        </Row>
      </Grid>
    );
    const dummySentences2 = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

    const gridInstance3 = (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences2.slice(0, 6).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences2.slice(0, 4).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences2.slice(0, 6).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences2.slice(0, 2).join(' ')}</Col>
        </Row>
      </Grid>
    );
    const imageResponsiveInstance = (
      <Image src="/static/img/thumbnail.png" responsive />
    );
    /*
     * IE8 不支持图片圆形剪切、不支持圆角、不支持SVG图片、不支持CSS3动画 :(
     */
    const imageShapeInstance = (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image src="/static/img/thumbnail.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/static/img/thumbnail.png" circle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/static/img/thumbnail.png" thumbnail />
          </Col>
        </Row>
      </Grid>
    );
    const jumbotronInstance = (
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    );
    const labelInstance = (
      <div>
        <h1>Label <Label>New</Label></h1>
        <h2>Label <Label>New</Label></h2>
        <h3>Label <Label>New</Label></h3>
        <h4>Label <Label>New</Label></h4>
        <h5>Label <Label>New</Label></h5>
        <p>Label <Label>New</Label></p>
      </div>
    );
    const labelVariationInstance = (
      <div>
        <Label bsStyle="default">Default</Label>&nbsp;
        <Label bsStyle="primary">Primary</Label>&nbsp;
        <Label bsStyle="success">Success</Label>&nbsp;
        <Label bsStyle="info">Info</Label>&nbsp;
        <Label bsStyle="warning">Warning</Label>&nbsp;
        <Label bsStyle="danger">Danger</Label>
      </div>
    );

    const tabsInstance = (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={4}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="first">
                Tab 1
              </NavItem>
              <NavItem eventKey="second">
                Tab 2
              </NavItem>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
                Tab 1 content
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                Tab 2 content
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );

    const listgroupInstance = (
      <ListGroup>
        <ListGroupItem href="#" active>Link 1</ListGroupItem>
        <ListGroupItem href="#">Link 2</ListGroupItem>
        <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
      </ListGroup>
    );

    const CustomComponent = React.createClass({
      render() {
        return (
          <li
            className="list-group-item"
            onClick={() => {}}>
            {this.props.children}
          </li>
        );
      }
    });

    const listgroupInstance2 = (
      <ListGroup componentClass="ul">
        <CustomComponent>Custom Child 1 </CustomComponent>
        <CustomComponent>Custom Child 2 </CustomComponent>
        <CustomComponent>Custom Child 3</CustomComponent>
      </ListGroup>
    );
    const listgroupInstance3 = (
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>...</ListGroupItem>
      </ListGroup>
    );
    const listgroupInstance4 = (
      <ListGroup>
        <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
        <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
        <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
      </ListGroup>
    );

    function alertClicked() {
      alert('You clicked the third ListGroupItem');
    }

    const listgroupInstance5 = (
      <ListGroup>
        <ListGroupItem href="#link1">Link 1</ListGroupItem>
        <ListGroupItem href="#link2">Link 2</ListGroupItem>
        <ListGroupItem onClick={alertClicked}>
          Trigger an alert
        </ListGroupItem>
      </ListGroup>
    );

    const listgroupInstance6 = (
      <ListGroup>
        <ListGroupItem bsStyle="success">Success</ListGroupItem>
        <ListGroupItem bsStyle="info">Info</ListGroupItem>
        <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
        <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
      </ListGroup>
    );

    const mediaAlignmentInstance = (
      <div>
        <Media>
          <Media.Left align="top">
            <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Top aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="middle">
            <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Middle aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="bottom">
            <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Bottom aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
      </div>
    );
    const mediaListInstance = (
      <div>
        <Media.List>
          <Media.ListItem>
            <Media.Left>
              <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>Media heading</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

                <Media>
                  <Media.Left>
                    <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Nested media heading</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

                    <Media>
                      <Media.Left>
                        <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading>Nested media heading</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                      </Media.Body>
                    </Media>
                  </Media.Body>
                </Media>

                <Media>
                  <Media.Left>
                    <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Nested media heading</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                  </Media.Body>
                </Media>
            </Media.Body>
          </Media.ListItem>
        </Media.List>
      </div>
    );
    const mediaInstance = (
      <div>
        <Media>
         <Media.Left>
            <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Nested Media Heading</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </Media.Body>
            </Media>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
          <Media.Right>
            <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
          </Media.Right>
        </Media>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
           <Media.Right>
            <img width={64} height={64} src="/static/img/thumbnail.png" alt="Image"/>
          </Media.Right>
        </Media>
      </div>
    );
    function onSelectAlert(eventKey) {
      alert(`Alert from menu item.\neventKey: ${eventKey}`);
    }

    const MenuItems = (
      <Clearfix>
        <ul className="dropdown-menu open">
          <MenuItem header>Header</MenuItem>
          <MenuItem>link</MenuItem>
          <MenuItem divider/>
          <MenuItem header>Header</MenuItem>
          <MenuItem>link</MenuItem>
          <MenuItem disabled>disabled</MenuItem>
          <MenuItem title="See? I have a title.">
            link with title
          </MenuItem>
          <MenuItem eventKey={1} href="#someHref" onSelect={onSelectAlert}>
            link that alerts
          </MenuItem>
        </ul>
      </Clearfix>
    );

    const Example3 = React.createClass({

      getInitialState() {
        return { showModal: false };
      },

      close() {
        this.setState({ showModal: false });
      },

      open() {
        this.setState({ showModal: true });
      },

      render() {
        let popover = <Popover id="20" title="popover">very popover. such engagement</Popover>;
        let tooltip = <Tooltip id="tooltip-modal">wow.</Tooltip>;

        return (
          <div>
            <p>Click to get the full Modal experience!</p>

            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.open}
            >
              Launch demo modal
            </Button>

            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Text in a modal</h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                <h4>Popover in a modal</h4>
                <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

                <h4>Tooltips in a modal</h4>
                <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

                <hr />

                <h4>Overflowing text to show scroll behavior</h4>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    });

    const Trigger = React.createClass({
      getInitialState() {
        return { show: false };
      },

      render() {
        let close = () => this.setState({ show: false});

        return (
          <div className="modal-container" style={{height: 200}}>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={() => this.setState({ show: true})}
            >
              Launch contained modal
            </Button>

            <Modal
              show={this.state.show}
              onHide={close}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    });

    const Example4 = React.createClass({
      getInitialState() {
        return {show: false};
      },

      showModal() {
        this.setState({show: true});
      },

      hideModal() {
        this.setState({show: false});
      },

      render() {
        return (
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.showModal}>
              Launch demo modal
            </Button>

            <Modal
              {...this.props}
              show={this.state.show}
              onHide={this.hideModal}
              dialogClassName="custom-modal"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Wrapped Text</h4>
                <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
                 Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis laudantium quibusdam quidem corporis architecto veritatis. Ex facilis minima beatae sunt perspiciatis placeat. Quasi corporis
                 odio eaque voluptatibus ratione magnam nulla? Amet cum maiores consequuntur totam dicta! Inventore adipisicing vel vero odio modi doloremque? Vitae porro impedit ea minima laboriosam quisquam neque. Perspiciatis omnis obcaecati consequatur sunt deleniti similique facilis sequi. Ipsum harum vitae modi reiciendis officiis.
                 Quas laudantium laudantium modi corporis nihil provident consectetur omnis, natus nulla distinctio illum corporis. Sit ex earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum illum architecto aspernatur perspiciatis error fuga illum, tempora harum earum, a dolores. Animi facilis inventore harum dolore accusamus
                 fuga provident molestiae eum! Odit dicta error dolorem sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat officia culpa sint! Beatae voluptates voluptatem excepturi molestiae alias in tenetur beatae placeat architecto. Sit possimus rerum
                 fugiat sapiente aspernatur. Necessitatibus tempora animi dicta perspiciatis tempora a velit in! Doloribus perspiciatis doloribus suscipit nam earum. Deleniti veritatis eaque totam assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur alias ipsum
                 repudiandae! Quia omnis quisquam dignissimos a mollitia. Suscipit aspernatur eum maiores repellendus ipsum doloribus alias voluptatum consequatur. Consectetur quibusdam veniam quas tenetur necessitatibus repudiandae? Rem optio vel alias neque optio sapiente quidem similique reiciendis tempore. Illum accusamus officia
                 cum enim minima eligendi consectetur nemo veritatis nam nisi! Adipisicing nobis perspiciatis dolorum adipisci soluta architecto doloremque voluptatibus omnis debitis quas repellendus. Consequuntur assumenda illum commodi mollitia asperiores? Quis aspernatur consequatur modi veritatis aliquid at? Atque vel iure quos.
                 Amet provident voluptatem amet aliquam deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum sed atque molestias debitis omnis! Sit sint repellendus deleniti officiis distinctio. Impedit vel quos harum doloribus corporis. Laborum ullam nemo quaerat
                 reiciendis recusandae minima dicta molestias rerum. Voluptas et ut omnis est ipsum accusamus harum. Amet exercitationem quasi velit inventore neque doloremque! Consequatur neque dolorem vel impedit sunt voluptate. Amet quo amet magni exercitationem libero recusandae possimus pariatur. Cumque eum blanditiis vel vitae
                 distinctio! Tempora! Consectetur sit eligendi neque sunt soluta laudantium natus qui aperiam quisquam consectetur consequatur sit sint a unde et. At voluptas ut officiis esse totam quasi dolorem! Hic deserunt doloribus repudiandae! Lorem quod ab nostrum asperiores aliquam ab id consequatur, expedita? Tempora quaerat
                 ex ea temporibus in tempore voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste! Accusantium atque elit voluptate asperiores corrupti temporibus mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis id quos dolorum eaque suscipit
                 magni delectus maxime. Sit odit provident vel magnam quod. Possimus eligendi non corrupti tenetur culpa accusantium quod quis. Voluptatum quaerat animi dolore maiores molestias voluptate? Necessitatibus illo omnis laborum hic enim minima! Similique. Dolor voluptatum reprehenderit nihil adipisci aperiam voluptatem soluta
                 magnam accusamus iste incidunt tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo animi ratione. Sunt odit similique doloribus temporibus reiciendis! Ullam. Dolor dolores veniam animi sequi dolores molestias voluptatem iure velit. Elit dolore quaerat incidunt enim aut distinctio. Ratione molestiae laboriosam
                 similique laboriosam eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.hideModal}>Close</Button>
              </Modal.Footer>
            </Modal>
          </ButtonToolbar>
        );
      }
    });

    const MySmallModal = React.createClass({
      render() {
        return (
          <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    });

    const MyLargeModal = React.createClass({
      render() {
        return (
          <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    });

    const App = React.createClass({
      getInitialState() {
        return { smShow: false, lgShow: false };
      },
      render() {
        let smClose = () => this.setState({ smShow: false });
        let lgClose = () => this.setState({ lgShow: false });

        return (
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={()=>this.setState({ smShow: true })}>
              Launch small demo modal
            </Button>
            <Button bsStyle="primary" onClick={()=>this.setState({ lgShow: true })}>
              Launch large demo modal
            </Button>

            <MySmallModal show={this.state.smShow} onHide={smClose} />
            <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
          </ButtonToolbar>
        );
      }
    });

    const modalInstance = (
      <div>
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
      </div>
    );

    const navbarInstance = (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
    const navbarInstance2 = (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    const navbarInstance3 = (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
    const navbarInstance4 = (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            Have a great day!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );

    function handleSelect2(selectedKey) {
      alert('selected ' + selectedKey);
    }

    const navInstance = (
      <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect2}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      </Nav>
    );
    const NavDropdownExample = React.createClass({
      handleSelect(eventKey) {
        // IE8 event.preventDefault() not working, using event.returnValue
        event.preventDefault ? event.preventDefault() : (event.returnValue=false);
        alert(`selected ${eventKey}`);
      },

      render() {
        return (
          <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
            <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            <NavDropdown eventKey={4} title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        );
      }
    });
    const NavJustified = React.createClass({
      handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
      },

      render() {
        return (
          <div>
            <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
            <br />
            <Nav bsStyle="pills" justified activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
          </div>
        );
      }
    });

    function handleSelect3(selectedKey) {
      alert('selected ' + selectedKey);
    }

    const navInstance2 = (
      <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect3}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      </Nav>
    );

    const Example5 = React.createClass({
      getInitialState() {
        return { show: true };
      },

      toggle() {
        this.setState({ show: !this.state.show });
      },

      render() {
        const sharedProps = {
          show: this.state.show,
          container: this,
          target: () => ReactDOM.findDOMNode(this.refs.target)
        };

        return (
          <div style={{ height: 100, paddingLeft: 150, position: 'relative' }}>
            <Button ref="target" onClick={this.toggle}>
              Click me!
            </Button>

            <Overlay {...sharedProps} placement="left">
              <Tooltip id="overload-left" style={{position:'relative'}}>Tooltip overload!</Tooltip>
            </Overlay>
            <Overlay {...sharedProps} placement="top">
              <Tooltip id="overload-top" style={{position:'relative'}}>Tooltip overload!</Tooltip>
            </Overlay>
            <Overlay {...sharedProps} placement="right">
              <Tooltip id="overload-right" style={{position:'relative'}}>Tooltip overload!</Tooltip>
            </Overlay>
            <Overlay {...sharedProps} placement="bottom">
              <Tooltip id="overload-bottom">Tooltip overload!</Tooltip>
            </Overlay>
          </div>
        );
      }
    });
    const Example6 = React.createClass({
      getInitialState() {
        return { show: true };
      },

      toggle() {
        this.setState({ show: !this.state.show });
      },

      render() {
        const style = {
          position: 'absolute',
          backgroundColor: '#EEE',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
          border: '1px solid #CCC',
          borderRadius: 3,
          marginLeft: -5,
          marginTop: 5,
          padding: 10
        };

        return (
          <div style={{ height: 100, position: 'relative' }}>
            <Button ref="target" onClick={this.toggle}>
              I am an Overlay target
            </Button>

            <Overlay
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
              placement="right"
              container={this}
              target={() => ReactDOM.findDOMNode(this.refs.target)}
            >
              <div style={style}>
                <strong>Holy guacamole!</strong> Check this info.
              </div>
            </Overlay>
          </div>
        );
      }
    });

    const pageHeaderInstance = (
      <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
    );
    const pagerInstance = (
      <Pager>
        <PageItem previous href="#">&larr; Previous Page</PageItem>
        <PageItem next href="#">Next Page &rarr;</PageItem>
      </Pager>
    );
    const pagerInstance2 = (
      <Pager>
        <PageItem href="#">Previous</PageItem>
        {' '}
        <PageItem href="#">Next</PageItem>
      </Pager>
    );
    const pagerInstance3 = (
      <Pager>
        <PageItem previous href="#">&larr; Previous</PageItem>
        <PageItem disabled next href="#">Next &rarr;</PageItem>
      </Pager>
    );
    const PaginationAdvanced = React.createClass({
      getInitialState() {
        return {
          activePage: 1
        };
      },

      handleSelect(eventKey) {
        this.setState({
          activePage: eventKey
        });
      },

      render() {
        return (
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={20}
            maxButtons={5}
            activePage={this.state.activePage}
            onSelect={this.handleSelect} />
        );
      }
    });
    const PaginationBasic = React.createClass({
      getInitialState() {
        return {
          activePage: 1
        };
      },

      handleSelect(eventKey) {
        this.setState({
          activePage: eventKey
        });
      },

      render() {
        return (
          <div>
            <Pagination
              bsSize="large"
              items={10}
              activePage={this.state.activePage}
              onSelect={this.handleSelect} />
            <br />

            <Pagination
              bsSize="medium"
              items={10}
              activePage={this.state.activePage}
              onSelect={this.handleSelect} />
            <br />

            <Pagination
              bsSize="small"
              items={10}
              activePage={this.state.activePage}
              onSelect={this.handleSelect} />
          </div>
        );
      }
    });
    function handleClick2() {
      alert('You have clicked on me');
    }

    const panelInstance0 = (
      <Panel onClick={ handleClick2 }>
        Basic panel example
      </Panel>
    );

    class Example7 extends React.Component {
      constructor(...args) {
        super(...args);
        this.state = {
          open: true
        };
      }

      render() {
        return (
          <div>
            <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
              click
            </Button>
            <Panel collapsible expanded={this.state.open}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Panel>
          </div>
        );
      }
    }

    const title = (
      <h3>Panel title</h3>
    );

    const panelsInstance = (
      <div>
        <Panel header={title}>
          Panel content
        </Panel>

        <Panel header={title} bsStyle="primary">
          Panel content
        </Panel>

        <Panel header={title} bsStyle="success">
          Panel content
        </Panel>

        <Panel header={title} bsStyle="info">
          Panel content
        </Panel>

        <Panel header={title} bsStyle="warning">
          Panel content
        </Panel>

        <Panel header={title} bsStyle="danger">
          Panel content
        </Panel>
      </div>
    );

    const accordionInstance = (
      <Accordion>
        <Panel header="Collapsible Group Item #1" eventKey="1">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven t heard of them accusamus labore sustainable VHS.
        </Panel>
        <Panel header="Collapsible Group Item #2" eventKey="2">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven t heard of them accusamus labore sustainable VHS.
        </Panel>
        <Panel header="Collapsible Group Item #3" eventKey="3">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven t heard of them accusamus labore sustainable VHS.
        </Panel>
      </Accordion>
    );
    const ControlledPanelGroup = React.createClass({
      getInitialState() {
        return {
          activeKey: '1'
        };
      },

      handleSelect(activeKey) {
        this.setState({ activeKey });
      },

      render() {
        return (
          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
            <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
            <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
          </PanelGroup>
        );
      }
    });

    const panelGroupInstance = (
      <PanelGroup defaultActiveKey="2" accordion>
        <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
        <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
      </PanelGroup>
    );

    const panelInstance = (
      <Panel collapsible defaultExpanded header="Panel heading">
        Some default panel content here.
        <ListGroup fill>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
        </ListGroup>
        Some more panel content here.
      </Panel>
    );

const panelInstance2 = (
  <Panel footer="Panel footer">
    Panel content
  </Panel>
);

const title2 = (
  <h3>Panel title</h3>
);

const panelsInstance2 = (
  <div>
    <Panel header="Panel heading without title">
      Panel content
    </Panel>
    <Panel header={title2}>
      Panel content
    </Panel>
  </div>
);

/*
 * 始终在某位置显示时，需要把position扭成relative, 默认是absolute
 */
const popoverInstance = (
  <div style={{ height: 120 }}>
    <Popover style={{position:'relative'}} id="mypoper" placement="right" positionLeft={150} positionTop={20} title="Popover right">
      And here s some <strong>amazing</strong> content. It is very engaging. right?
    </Popover>
  </div>
);

class Example8 extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false };
  }
  render() {
    return (
      <ButtonToolbar>
        <Button
          bsStyle="default"
          onClick={e => this.setState({ target: e.target, show: !this.state.show })}
        >
          Holy guacamole!
        </Button>

        <Overlay
          show={this.state.show}
          target={()=> ReactDOM.findDOMNode(this.state.target)}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
         {/* 注意：相对父容器展示时，需要把position扭为relative，否则位置错误 */}
          <Popover id="21" title="Popover bottom" style={{position:'relative'}}>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
}

const positionerInstance = (
  <ButtonToolbar>
    <OverlayTrigger trigger="click" placement="left" overlay={<Popover id="1" title="Popover left"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="2" title="Popover top"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="3" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="4" title="Popover right"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>
  </ButtonToolbar>
);
/*
 * Chrom,IE8均需调整,官方存在bug,修改 node-modules/dom-helpers/query/position.js line 51
 * 计算position有误，跟position:absolute有关
 */
class Positioner extends React.Component {
  render() {
    return (
      <ButtonToolbar style={{padding: '100px 0'}}>
        <OverlayTrigger container={this} trigger="click" placement="left" overlay={<Popover id="5" title="Popover left"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
        <OverlayTrigger container={this} trigger="click" placement="top" overlay={<Popover id="6" title="Popover top"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
        <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={<Popover id="7" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
        <OverlayTrigger container={this} trigger="click" placement="right" overlay={<Popover id="8" title="Popover right"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
      </ButtonToolbar>
    );
  }
}
const positionerInstance2 = (
  <ButtonToolbar>
    <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="9" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
      <Button bsStyle="default">Click</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="hover" placement="bottom" overlay={<Popover id="10" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
      <Button bsStyle="default">Hover</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="focus" placement="bottom" overlay={<Popover id="11" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
      <Button bsStyle="default">Focus</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover id="12" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
      <Button bsStyle="default">Click + rootClose</Button>
    </OverlayTrigger>
  </ButtonToolbar>
);
const progressInstance = (
  <ProgressBar active now={45} />
);
const progressInstance2 = (
  <ProgressBar now={60} />
);
const progressInstance3 = (
  <div>
    <ProgressBar bsStyle="success" now={40} />
    <ProgressBar bsStyle="info" now={20} />
    <ProgressBar bsStyle="warning" now={60} />
    <ProgressBar bsStyle="danger" now={80} />
  </div>
);
const now = 60;

const progressInstance4 = (
  <ProgressBar now={now} label={`${now}%`} srOnly />
);

const progressInstance5 = (
  <ProgressBar>
    <ProgressBar striped bsStyle="success" now={35} key={1} />
    <ProgressBar bsStyle="warning" now={20} key={2} />
    <ProgressBar active bsStyle="danger" now={10} key={3} />
  </ProgressBar>
);
const progressInstance6 = (
  <div>
    <ProgressBar striped bsStyle="success" now={40} />
    <ProgressBar striped bsStyle="info" now={20} />
    <ProgressBar striped bsStyle="warning" now={60} />
    <ProgressBar striped bsStyle="danger" now={80} />
  </div>
);
const now2 = 60;

const progressInstance7 = (
  <ProgressBar now={now2} label={`${now2}%`} />
);

const responsiveEmbedInstance = (
  <div style={{width: 660, height: 'auto'}}>
    <ResponsiveEmbed a16by9>
      <embed type="image/svg+xml" src="/static/img/TheresaKnott_castle.svg" />
    </ResponsiveEmbed>
  </div>
);
const BUTTONS2 = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

function renderDropdownButton(title, i) {
  return (
    <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </SplitButton>
  );
}

const buttonsInstance9 = (
  <ButtonToolbar>{BUTTONS2.map(renderDropdownButton)}</ButtonToolbar>
);
const buttonsInstance10 = (
  <div>
    <ButtonToolbar>
      <SplitButton title="Dropup" dropup id="split-button-dropup">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </SplitButton>
    </ButtonToolbar>

    <ButtonToolbar>
      <SplitButton bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </SplitButton>
    </ButtonToolbar>
  </div>
);
const buttonsInstance11 = (
  <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
    <MenuItem eventKey="1">Action</MenuItem>
    <MenuItem eventKey="2">Another action</MenuItem>
    <MenuItem eventKey="3">Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey="4">Separated link</MenuItem>
  </SplitButton>
);
const tableInstance = (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
);
const tableInstance2 = (
  <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
);
const ControlledTabs = React.createClass({
  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    alert('selected ' + key);
    this.setState({key});
  },

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
    );
  }
});
const tabsInstance2 = (
  <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
  </Tabs>
);
const tabsInstance3 = (
  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
  </Tabs>
);
const thumbnailInstance = (
<Grid>
  <Row>
  <Col xs={6} md={3}>
    <Thumbnail href="#" alt="171x180" src="/static/img/thumbnail.png" />
  </Col>
  <Col xs={6} md={3}>
    <Thumbnail href="#" alt="171x180" src="/static/img/thumbnail.png" />
  </Col>
  <Col xs={6} md={3}>
    <Thumbnail href="#" alt="171x180" src="/static/img/thumbnail.png" />
  </Col>
  </Row>
</Grid>
);
const thumbnailInstance2 = (
  <Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="/static/img/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/static/img/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/static/img/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
);
const tooltipInstance = (
  <div>
    <Tooltip placement="right" className="in" id="tooltip-right">
      Tooltip right
    </Tooltip>

    <Tooltip placement="top" className="in" id="tooltip-top">
      Tooltip top
    </Tooltip>

    <Tooltip placement="left" className="in" id="tooltip-left">
      Tooltip left
    </Tooltip>

    <Tooltip placement="bottom" className="in" id="tooltip-bottom">
      Tooltip bottom
    </Tooltip>
  </div>
);

const LinkWithTooltip = React.createClass({
  render() {
    let tooltip = <Tooltip id={this.props.id}>{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip} placement="top"
        delayShow={300} delayHide={150}
      >
        <a href={this.props.href}>{this.props.children}</a>
      </OverlayTrigger>
    );
  }
});

const copyInstance = (
  <p className="muted" style={{ marginBottom: 0 }}>
    Tight pants next level keffiyeh <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">you probably</LinkWithTooltip> haven t
    heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney s
    fixie sustainable quinoa 8-bit american apparel <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#" id="tooltip-2">have a</LinkWithTooltip>
    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four
    loko mcsweeney s cleanse vegan chambray. A really ironic artisan <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">whatever keytar</LinkWithTooltip>,
    scenester farm-to-table banksy Austin <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">twitter handle</LinkWithTooltip> freegan
    cred raw denim single-origin coffee viral.
  </p>
);
const tooltip = (
  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);

/*
 * IE8下报错，修改 node-modules/dom-helpers/query/offset.js line19 注释掉即可
 *  因为IE8下 getBoundingClientRect方法不返回 width和height属性导致
 */
const positionerInstance3 = (
  <ButtonToolbar>
    <OverlayTrigger placement="left" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="top" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="right" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>
  </ButtonToolbar>
);
const wellInstance = (
  <Well>Look I am in a well!</Well>
);
const wellInstance2 = (
  <div>
    <Well bsSize="large">Look I am in a large well!</Well>
    <Well bsSize="small">Look I am in a small well!</Well>
  </div>
);

// buttons
render(buttonsInstance,document.getElementById('buttonsInstance'))
render(buttonsInstance2,document.getElementById('buttonsInstance2'))
render(buttonsInstance3,document.getElementById('buttonsInstance3'))
render(buttonGroupInstance,document.getElementById('buttonGroupInstance'))
render(buttonGroupInstance2,document.getElementById('buttonGroupInstance2'))
render(buttonGroupInstance3,document.getElementById('buttonGroupInstance3'))
render(buttonGroupInstance4,document.getElementById('buttonGroupInstance4'))
render(buttonGroupInstance5,document.getElementById('buttonGroupInstance5'))
render(buttonGroupInstance6,document.getElementById('buttonGroupInstance6'))
render(<LoadingButton />,document.getElementById('LoadingButton'))
render(buttonsInstance4,document.getElementById('buttonsInstance4'))
render(buttonsInstance5,document.getElementById('buttonsInstance5'))
render(buttonGroupInstance7,document.getElementById('buttonGroupInstance7'))
render(buttonsInstance6,document.getElementById('buttonsInstance6'))
render(customButtonStyle,document.getElementById('customButtonStyle'))
render(buttonsInstance7,document.getElementById('buttonsInstance7'))
render(dropdownInstance,document.getElementById('dropdownInstance'))
render(dropdownExample,document.getElementById('dropdownExample'))
render(buttonInstance,document.getElementById('buttonInstance'))
render(buttonsInstance8,document.getElementById('buttonsInstance8'))
render(buttonsInstance9,document.getElementById('buttonsInstance9'))
render(buttonsInstance10,document.getElementById('buttonsInstance10'))
render(buttonsInstance11,document.getElementById('buttonsInstance11'))
render(MenuItems,document.getElementById('MenuItems'))

// Overlays
//render(modalInstance,document.getElementById('modalInstance'))
render(<App />,document.getElementById('App'))
render(<Trigger />,document.getElementById('Trigger'))
render(<Example3 />,document.getElementById('Example3'))
render(<Example4 />,document.getElementById('Example4'))

render(tooltipInstance,document.getElementById('tooltipInstance'))
render(positionerInstance3,document.getElementById('positionerInstance3'))
render(copyInstance,document.getElementById('copyInstance'))

render(popoverInstance,document.getElementById('popoverInstance'))
render(positionerInstance,document.getElementById('positionerInstance'))
render(positionerInstance2,document.getElementById('positionerInstance2'))

// render(<Example8 />,document.getElementById('Example8'))
// render(<Positioner />,document.getElementById('Positioner'))
//
// render(<Example5 />,document.getElementById('Example5'))
// render(<Example6 />,document.getElementById('Example6'))

// Page layout

// - Grid
render(gridInstance,document.getElementById('gridInstance'))
render(gridInstance2,document.getElementById('gridInstance2'))
render(gridInstance3,document.getElementById('gridInstance3'))
// - Jumbotron
render(jumbotronInstance,document.getElementById('jumbotronInstance'))
// - Page header
render(pageHeaderInstance,document.getElementById('pageHeaderInstance'))
// - List group
render(listgroupInstance,document.getElementById('listgroupInstance'))
render(listgroupInstance2,document.getElementById('listgroupInstance2'))
render(listgroupInstance3,document.getElementById('listgroupInstance3'))
render(listgroupInstance4,document.getElementById('listgroupInstance4'))
render(listgroupInstance5,document.getElementById('listgroupInstance5'))
render(listgroupInstance6,document.getElementById('listgroupInstance6'))
// - Tables
render(tableInstance,document.getElementById('tableInstance'))
render(tableInstance2,document.getElementById('tableInstance2'))
// - Panels
render(panelInstance0,document.getElementById('panelInstance0'))
render(<Example7 />,document.getElementById('Example7'))
render(panelsInstance,document.getElementById('panelsInstance'))
render(accordionInstance,document.getElementById('accordionInstance'))
render(accordionInstance,document.getElementById('accordionInstance'))
render(<ControlledPanelGroup />,document.getElementById('ControlledPanelGroup'))
render(panelGroupInstance,document.getElementById('panelGroupInstance'))
render(panelInstance,document.getElementById('panelInstance'))
render(panelInstance2,document.getElementById('panelInstance2'))
render(panelsInstance2,document.getElementById('panelsInstance2'))
// - Wells
render(wellInstance,document.getElementById('wellInstance'))
render(wellInstance2,document.getElementById('wellInstance2'))

// Forms
render(<FormExample />,document.getElementById('FormExample'))
render(formInstance,document.getElementById('formInstance'))
render(formInstance2,document.getElementById('formInstance2'))
render(formInstance3,document.getElementById('formInstance3'))
render(formInstance4,document.getElementById('formInstance4'))
render(formInstance5,document.getElementById('formInstance5'))
render(formInstance6,document.getElementById('formInstance6'))

// Navigation

// - Navs & Navbars
render(navbarInstance,document.getElementById('navbarInstance'))
render(navbarInstance2,document.getElementById('navbarInstance2'))
render(navbarInstance3,document.getElementById('navbarInstance3'))
render(navbarInstance4,document.getElementById('navbarInstance4'))
render(navInstance,document.getElementById('navInstance'))
render(<NavDropdownExample />,document.getElementById('NavDropdownExample'))
render(<NavJustified />,document.getElementById('NavJustified'))
render(navInstance2,document.getElementById('navInstance2'))

// - Breadcrumbs
render(breadcrumbInstance,document.getElementById('breadcrumbInstance'))

// - Tabs
render(tabsInstance,document.getElementById('tabsInstance'))
render(<ControlledTabs />,document.getElementById('ControlledTabs'))
render(tabsInstance2,document.getElementById('tabsInstance2'))
render(tabsInstance3,document.getElementById('tabsInstance3'))

// - Pagination
render(<PaginationBasic />,document.getElementById('PaginationBasic'))
render(<PaginationAdvanced />,document.getElementById('PaginationAdvanced'))
render(pagerInstance,document.getElementById('pagerInstance'))
render(pagerInstance2,document.getElementById('pagerInstance2'))
render(pagerInstance3,document.getElementById('pagerInstance3'))

// Media content
render(imageResponsiveInstance,document.getElementById('imageResponsiveInstance'))
render(imageShapeInstance,document.getElementById('imageShapeInstance'))

render(thumbnailInstance,document.getElementById('thumbnailInstance'))
render(thumbnailInstance2,document.getElementById('thumbnailInstance2'))
render(responsiveEmbedInstance,document.getElementById('responsiveEmbedInstance'))

render(<ControlledCarousel />,document.getElementById('ControlledCarousel'))
render(carouselInstance,document.getElementById('carouselInstance'))

render(mediaAlignmentInstance,document.getElementById('mediaAlignmentInstance'))
render(mediaListInstance,document.getElementById('mediaListInstance'))
render(mediaInstance,document.getElementById('mediaInstance'))

// Miscellaneous
render(glyphInstance,document.getElementById('glyphInstance'))
render(labelInstance,document.getElementById('labelInstance'))
render(labelVariationInstance,document.getElementById('labelVariationInstance'))
render(badgeInstance,document.getElementById('badgeInstance'))
render(alertInstance,document.getElementById('alertInstance'))
render(<AlertDismissable />,document.getElementById('AlertDismissable'))
render(progressInstance,document.getElementById('progressInstance'))
render(progressInstance2,document.getElementById('progressInstance2'))
render(progressInstance3,document.getElementById('progressInstance3'))
render(progressInstance4,document.getElementById('progressInstance4'))
render(progressInstance5,document.getElementById('progressInstance5'))
render(progressInstance6,document.getElementById('progressInstance6'))
render(progressInstance7,document.getElementById('progressInstance7'))

// Utilities
render(<Example />,document.getElementById('Example'))
//render(<Example2 />,document.getElementById('Example2'))
