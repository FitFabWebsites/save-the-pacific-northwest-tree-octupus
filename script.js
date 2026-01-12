// Donation Form Handler - Educational Message
document.addEventListener('DOMContentLoaded', function() {
    // Get the donation button
    const donateButton = document.querySelector('.btn-donate-large');

    if (donateButton) {
        donateButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Create modal overlay
            const modal = document.createElement('div');
            modal.className = 'donation-modal-overlay';
            modal.innerHTML = `
                <div class="donation-modal">
                    <div class="modal-header">
                        <h2>🎓 A Lesson in Media Literacy</h2>
                        <button class="modal-close" aria-label="Close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p class="modal-lead">Thank you for your willingness to donate!</p>
                        <p>However, we must inform you that <strong>the Pacific Northwest Tree Octopus is not a real species</strong>. This website is an educational tool designed to teach critical thinking and media literacy.</p>

                        <div class="modal-lesson">
                            <h3>What This Teaches Us:</h3>
                            <ul>
                                <li><strong>Verify sources:</strong> Always check multiple credible sources before believing information online</li>
                                <li><strong>Look for evidence:</strong> Scientific claims should be backed by peer-reviewed research</li>
                                <li><strong>Think critically:</strong> Even professional-looking websites can contain misinformation</li>
                                <li><strong>Question everything:</strong> Ask yourself: "Does this make sense? Where's the evidence?"</li>
                            </ul>
                        </div>

                        <div class="modal-real-cause">
                            <h3>Support a Real Cause Instead</h3>
                            <p>Since you were ready to make a difference, consider donating to a real educational initiative:</p>
                            <a href="https://sites.google.com/sierraacademy.net/saelsenegalfieldwork/home"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="btn btn-primary modal-donate-btn">
                                Donate to Sael to Senegal Fieldwork
                            </a>
                            <p class="modal-cause-description">This legitimate program supports educational fieldwork and cultural exchange in Senegal.</p>
                        </div>

                        <div class="modal-footer">
                            <p><em>Remember: Always research before donating to any cause online!</em></p>
                        </div>
                    </div>
                </div>
            `;

            // Add modal to page
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';

            // Close modal functionality
            const closeModal = function() {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            };

            // Close on X button
            modal.querySelector('.modal-close').addEventListener('click', closeModal);

            // Close on overlay click
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });

            // Close on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && document.body.contains(modal)) {
                    closeModal();
                }
            });
        });
    }

    // Also handle social share buttons with educational message
    const socialButtons = document.querySelectorAll('.btn-social');
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Before sharing, remember: The Tree Octopus is not real! This is an educational website about media literacy. Please share responsibly and help others learn to think critically about online information.');
        });
    });

    // Handle newsletter subscription with educational message
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Reminder: The Pacific Northwest Tree Octopus is not real. This website is designed to teach media literacy and critical thinking skills. Always verify information from multiple credible sources!');
        });
    }
});
