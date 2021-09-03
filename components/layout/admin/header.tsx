const header = () => {
  return (
    <>
      <div className='header-logo flex-shrink-0'>
        <h3 className='logo-text'>
          <a href=''>
            <span className='app-version'>123123</span>
          </a>
        </h3>
      </div>
      <div className='header-widgets d-flex flex-grow-1'>
        <div className='widgets-left d-flex flex-grow-1 align-items-center'>
          <div className='header-widget'>
            <span className='btn-toggle-admin-menu btn btn-sm btn-link'>
              <i className='icon ion-ios-menu'></i>
            </span>
          </div>
          <div className='header-widget search-widget'>
            <a href='/' className='btn btn-link' target='_blank'>
              <i className='fa fa-eye'></i>
            </a>
          </div>
        </div>
        <div className='widgets-right flex-shrink-0 d-flex'>
          <div className='dropdown header-widget widget-user widget-language flex-shrink-0'>
            <div
              data-toggle='dropdown'
              className='user-dropdown d-flex align-items-center'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <i className='fa fa-angle-down'></i>
            </div>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'></div>
          </div>

          <div className='dropdown header-widget widget-user pt-2 dropdown-notifications flex-shrink-0'>
            <div
              data-toggle='dropdown'
              className='user-dropdown d-flex align-items-center'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <i className='fa fa-lg fa-bell m-1 p-1'></i>
              <span className='badge badge-danger notification-icon'></span>
            </div>
            <div
              className='dropdown-menu overflow-auto notify-items dropdown-container dropdown-menu-right dropdown-large'
              aria-labelledby='dropdownMenuButton'
            >
              <div className='dropdown-toolbar'>
                <div className='dropdown-toolbar-actions'>
                  <a href='#' className='markAllAsRead'></a>
                </div>
                <h3 className='dropdown-toolbar-title'></h3>
              </div>
              <ul className='dropdown-list-items p-0 m-0'></ul>
              <div className='dropdown-footer text-center'>
                <a href="{{route('core.admin.notification.loadNotify')}}"></a>
              </div>
            </div>
          </div>
          <div className='dropdown header-widget widget-user flex-shrink-0'>
            <div
              data-toggle='dropdown'
              className='user-dropdown d-flex align-items-center'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <span className='user-avatar flex-shrink-0'></span>
              <div className='user-info flex-grow-1'>
                <div className='user-name'></div>
                <div className='user-role'></div>
              </div>
              <i className='fa fa-angle-down'></i>
            </div>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <a className='dropdown-item' href="{{url('admin/module/user/edit/'.$user->id)}}"></a>
              <a
                className='dropdown-item'
                href="{{url('admin/module/user/password/'.$user->id)}}"
              ></a>
              <a className='dropdown-item' href='#'>
                <i className='fa fa-sign-out'></i>
              </a>
            </div>
            <form id='logout-form' method='POST'></form>
          </div>
        </div>
      </div>
    </>
  )
}

export default header
