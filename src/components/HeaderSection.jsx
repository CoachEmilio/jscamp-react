export default function HeaderSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        console.log("Email submitted:", email);
    };

    return (
        <div>
                <div id ="header-content">
                    <div>
                        <a href="#" style={{ 
                            display: 'inline-block',
                            padding: '0.5rem 1rem', 
                            backgroundColor: '#ff8c00ff', 
                            color: 'white',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            marginBottom: '1rem'
                        }}>
                            🎉 We're doing Gymnastics Websites for All →
                        </a>

                        <h1 style={{ 
                            fontSize: '3rem', 
                            fontWeight: 'bold',
                            color: '#ffffffff',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            justifyContent: 'left'
                        }}>
                            Coach Emilio
                        </h1>
                        <h2 style={{ 
                            fontSize: '1.5rem',
                            color: '#ffffffff',
                            marginBottom: '1rem',
                        }}>
                            Analytics made simple for your profile & business
                        </h2>

                        <p style={{ 
                            fontSize: '1.25rem',
                            color: '#ffd900ff',
                            marginBottom: '2rem',
                            maxWidth: '600px',
                            display: 'flex',
                            justifyContent: 'left'
                        }}>
                            Powerful portfolios, specialists in sports coaches
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
                                    border: '1px solid #dbd9d1ff',
                                    borderRadius: '8px',
                                    fontSize: '1rem'
                                }}
                            />
                            <button 
                                type="submit"
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#fe7700ff',
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
                            color: '#afac9cff',
                            marginTop: '0.5rem'
                        }}>
                            We care about your data in our {""}
                            <a id="privacy-policy" href="#">
                                privacy policy
                            </a>.
                        </p>
                    </div>
                </div>
        </div>
    );
}