import { navOptions } from './NavigationBar'

const Breadcrumbs = () => {
  return (
    <div>
      <nav>
        <ol style={{ listStyle: 'none', padding: 0, wordSpacing: '2px' }}>
          {navOptions.map((breadcrumb, index) => (
            <li key={index} style={{ display: 'inline' }}>
              {breadcrumb.path ? (
                <a
                  href={breadcrumb.path}
                  style={{
                    textDecoration: 'underline',
                    color: '#ccc',
                  }}
                >
                  {breadcrumb.name}
                </a>
              ) : (
                <span>{breadcrumb.name}</span>
              )}
              {index < navOptions.length - 1 && (
                <span style={{ color: 'white' }}> / </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumbs
