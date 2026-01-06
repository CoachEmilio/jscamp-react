export default function HeaderSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        console.log("Email submitted:", email);
    };

    return (
        <div>
            <section style={{ padding: '4rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div>
                        <a href="#" style={{ 
                            display: 'inline-block',
                            padding: '0.5rem 1rem', 
                            backgroundColor: '#3b82f6', 
                            color: 'white',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            marginBottom: '1rem'
                        }}>
                            🎉 We're hiring! Join our remote team →
                        </a>

                        <h1 style={{ 
                            fontSize: '3rem', 
                            fontWeight: 'bold',
                            color: '#111827',
                            marginBottom: '1.5rem'
                        }}>
                            People who care about your growth
                        </h1>
                        <p style={{ 
                            fontSize: '1.25rem',
                            color: '#6b7280',
                            marginBottom: '2rem',
                            maxWidth: '600px'
                        }}>
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', maxWidth: '500px' }}>
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    flex: 1,
                                    padding: '0.75rem 1rem',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '8px',
                                    fontSize: '1rem'
                                }}
                            />
                            <button 
                                type="submit"
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#3b82f6',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    fontWeight: '600'
                                }}
                            >
                                Get started
                            </button>
                        </form>
                        <p style={{ 
                            fontSize: '0.875rem',
                            color: '#9ca3af',
                            marginTop: '0.5rem'
                        }}>
                            We care about your data in our{" "}
                            <a href="#" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
                                privacy policy
                            </a>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}