/* eslint-disable max-len */
import React from 'react';
import BaseSvg from './BaseSvg';

export const IconAutoware = ({ color = 'currentColor', title = 'Partner Autoware', ...rest }) => (
  <BaseSvg width='172' height='80' viewBox='0 0 172 80' {...rest} title={title}>
    <rect width='172' height='80' fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use href='#image0' transform='scale(0.00387597 0.00833333)' />
      </pattern>
      <image
        id='image0'
        width='258'
        height='120'
        href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAAB4CAYAAAAZgfxDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDctMjBUMTQ6NTA6NTQrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA3LTIwVDE0OjU1OjM4KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA3LTIwVDE0OjU1OjM4KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmNlZWNjNGZmLWQ5YWUtNDgyMy1hMmRiLThlNDE3MWU5NDE5OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDplZjIyNzFlYS1kOTUyLTQwZWEtOGQ3OS01MTk0NjljMGM2M2UiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplZjIyNzFlYS1kOTUyLTQwZWEtOGQ3OS01MTk0NjljMGM2M2UiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVmMjI3MWVhLWQ5NTItNDBlYS04ZDc5LTUxOTQ2OWMwYzYzZSIgc3RFdnQ6d2hlbj0iMjAyMC0wNy0yMFQxNDo1MDo1NCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNlZWNjNGZmLWQ5YWUtNDgyMy1hMmRiLThlNDE3MWU5NDE5OSIgc3RFdnQ6d2hlbj0iMjAyMC0wNy0yMFQxNDo1NTozOCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4U+i6QAAJotJREFUeJztnXmYXUWZ/z/dnYWdQAQZiQuIhGUcIyiyiYLMgMRBEEREFFHAsAUEBIEwCES2yAgBfwRkHcmIgiyjgCgKyiIqDiAKMYY1xBC2BBEI6e33x7e+U3VPzl26+3b3bajv85yn7j1Vp06dOlVvvfVup623t5eMjIw3N9qHuwEZGRnDj0wIMjIyMiHIyMjIhCAjI4NMCDIyMsiEICMjg0wIMjIyyIQgIyODTAgyMjLIhCAjI4NMCDIyMsiEICMjg0wIMjIyyIQgIyMDGDXQCqZOm9WMdjQb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'
      />
    </defs>
  </BaseSvg>
);