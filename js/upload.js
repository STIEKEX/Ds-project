// ==========================================
// UPLOAD MODAL POPUP FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadModal = document.getElementById('uploadModal');
    const closeBtn = document.querySelector('.upload-close-btn');
    const uploadForm = document.getElementById('uploadBookForm');
    const pdfUploadArea = document.getElementById('pdfUploadArea');
    const pdfInput = document.getElementById('bookPDF');
    const pdfFileName = document.getElementById('pdfFileName');

    // Open modal when Upload button is clicked
    if (uploadBtn) {
        uploadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            uploadModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }

    // Close modal when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            uploadModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === uploadModal) {
            uploadModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // PDF Upload Area - Click to browse
    if (pdfUploadArea) {
        pdfUploadArea.addEventListener('click', function() {
            pdfInput.click();
        });

        // Drag & Drop functionality
        pdfUploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            pdfUploadArea.classList.add('drag-over');
        });

        pdfUploadArea.addEventListener('dragleave', function() {
            pdfUploadArea.classList.remove('drag-over');
        });

        pdfUploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            pdfUploadArea.classList.remove('drag-over');
            
            if (e.dataTransfer.files.length) {
                pdfInput.files = e.dataTransfer.files;
                displayFileName(e.dataTransfer.files[0]);
            }
        });

        // File input change
        pdfInput.addEventListener('change', function() {
            if (this.files.length) {
                displayFileName(this.files[0]);
            }
        });
    }

    function displayFileName(file) {
        pdfFileName.textContent = `Selected: ${file.name}`;
        pdfFileName.style.display = 'block';
    }

    // Form submission
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                pdf: pdfInput.files[0],
                cover: document.getElementById('bookCover').files[0],
                title: document.getElementById('bookTitle').value,
                author: document.getElementById('author').value,
                description: document.getElementById('description').value,
                category: document.getElementById('category').value,
                tags: document.getElementById('tags').value
            };

            console.log('Book upload data:', formData);
            
            // Show success message
            alert('Book uploaded successfully! (This is a demo - connect to backend)');
            
            // Close modal and reset form
            uploadModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            uploadForm.reset();
            pdfFileName.style.display = 'none';
        });
    }
});
