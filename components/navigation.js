import Link from 'next/link'

function Navigation() {
    return <div>
        <nav>
            <Link href="/">
                <a>Ana Sayfa</a>
            </Link>
            <Link href="/about">
                <a>Hakkımda</a>
            </Link>
        </nav>

    </div>
}

export default Navigation