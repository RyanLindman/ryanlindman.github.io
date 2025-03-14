import { Link } from 'react-router-dom'
import { navOptions } from './NavigationBar'

const Breadcrumbs = () => {
  return (
    <div>
      <nav>
        <ol style={{ listStyle: 'none', padding: 0, wordSpacing: '2px' }}>
          {navOptions.map((breadcrumb, index) => (
            <li key={index} style={{ display: 'inline' }}>
              {breadcrumb.path ? (
                <Link
                  to={breadcrumb.path}
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    textDecoration: 'underline',
                    color: '#ccc',
                  }}
                >
                  {breadcrumb.name}
                </Link>
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
