import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = joinSegments(baseDir, "static", "1hive-logo.svg")
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} aria-label={`${title} home`}>
        <img src={logoPath} alt="" aria-hidden="true" />
        <span>{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title a {
  align-items: center;
  color: var(--dark);
  display: inline-flex;
  font-weight: 800;
  gap: 0.7rem;
  letter-spacing: -0.04em;
}

.page-title img {
  display: block;
  height: 2.2rem;
  width: auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
