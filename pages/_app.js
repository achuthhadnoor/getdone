import ThemeWrapper from "../utils/theme";
import { AuthProvider } from "../hooks/use-auth";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeWrapper>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
      </ThemeWrapper>
    </>
  )
}
