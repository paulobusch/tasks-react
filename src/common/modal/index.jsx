import React from 'react';
import Action from './action';

export default function Modal(props) {
  const { title, show, actions, onClose } = props;
  const buttons = actions || [{ text: 'Fechar', click: onClose }];
  return (
    <div>
      <div className={ `modal fade ${show ? 'show' : ''}` } style={ { display: show ? 'block' : '' } } role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{ title }</h5>
              <button onClick={ () => onClose() } type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              { props.children }
            </div>
            <div className="modal-footer">
              { buttons.map(b => 
                <Action key={ b.text } 
                  onClick={ b.click } 
                  loading={ b.loading } 
                  style={ b.style }
                  text={ b.text }
                />
              ) }
            </div>
          </div>
        </div>
      </div>
      { show && <div className="modal-backdrop fade show"></div> }
    </div>
  );
}
