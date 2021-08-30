import { MainFooterProps } from './main.footer.types'

export const MainFooter = (props: MainFooterProps) => (
  <footer className="footer bg-gray-800 text-gray-200 relative pt-1">
    <div className="container mx-auto px-6">
      <div className="sm:flex sm:mt-8">
        <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            {props.LeftColumnHeader && <span className="font-bold uppercase mb-2">{props.LeftColumnHeader}</span>}
            {props.LeftColumnLinks &&
              props.LeftColumnLinks.map((l, i) => (
                <span key={i} className="text-sm my-2 hover:text-red-600">
                  {l}
                </span>
              ))}
          </div>
          <div className="flex flex-col">
            {props.MiddleColumnHeader && <span className="font-bold uppercase mb-2">{props.MiddleColumnHeader}</span>}
            {props.MiddleColumnLinks &&
              props.MiddleColumnLinks.map((l, i) => (
                <span key={i} className="text-sm my-2 hover:text-red-600">
                  {l}
                </span>
              ))}
          </div>
          <div className="flex flex-col">
            {props.RightColumnHeader && <span className="font-bold uppercase mb-2">{props.RightColumnHeader}</span>}
            {props.RightColumnLinks &&
              props.RightColumnLinks.map((l, i) => (
                <span key={i} className="text-sm my-2 hover:text-red-600">
                  {l}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-6">
      <div className="mt-16 border-t-2 border-gray-400 flex flex-col items-center">
        <div className="sm:w-2/3 text-center py-6">
          <p className="text-sm font-bold mb-2 text-gray-400">© 2021 by NoMad DevStudio</p>
        </div>
      </div>
    </div>
  </footer>
)
