// getdates.js

/// Function to update the copyright year in the footer
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightYearElement = document.getElementById('copyrightYear');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
}

// Function to update the last modified date in the footer
function updateLastModified() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = formatDate(lastModified);
    }
}