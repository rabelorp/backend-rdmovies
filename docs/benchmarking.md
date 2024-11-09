# Teste de benchmarking

## Tabela de Documentação <!-- omit in toc -->

- [Apache Benchmark](#apache-benchmark)

## Apache Benchmark

```bash
docker run --rm --network rd-movie_rdmovies-network jordi/ab -n 100 -c 100 -T application/json -H "Authorization: Bearer <TOKEN>" -v 2 http://172.17.0.1:9000/api/v1/users
```

---

Anterior: [Testes](tests.md)

Próximo: [Principal](../README.md)
